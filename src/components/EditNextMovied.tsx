import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {useNavigate, useLocation} from "react-router-dom";
import {  format } from "date-fns";
import { ja } from "date-fns/locale";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Input } from '@material-ui/core';
import {PostNextMovied} from '../service/api'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import  TextField  from '@mui/material/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: "800px",
    height:"600px",
    margin:"auto",
    overflowX: "auto"
  },
  root2:{
    width:"350px",
    height:"450px",
    margin:"auto",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  selectTableCell: {
    width: 60
  },
  tableCell: {
    width: 230,
    height: 10
  },
  tableCell1: {
    width: 330,
  },
  tableCell2:{
    paddingBottom:"5px",
    paddingTop:"10px",
    width:"350px",
    fontSize:"15px"
  },
  tableCellDetail:{
    width: 230,
    height: 150
  },
  tableCellComent:{
    width: 230,
    height: 150
  },
  input: {
    width: 230,
    height: 80
  },
  field:{
    width: "100%",
    height: 48,
    border:"solid",
    borderRadius:"5px",
    borderWidth:"thin",
    borderColor:"#C0C0C0",
    position: "relative",
    marginTop:"15px",
    '&:hover':{
      borderColor: "#000000",
    }
  },
  fieldlable:{
    background: "#fff",
    padding: "3px 10px",
    color: "#666666",
    position: "absolute",
    top: "-15px",
    left: "5px",
  },
  reviewIcon:{
    textAlign: "center",
    padding: "15px 10px"
  },
  buttons:{
    textAlign:"center",
    margin:"20px auto"
  }
}));


const EditNextMovied = () =>{
  const base_url:string= "https://image.tmdb.org/t/p/w185/";
  const classes = useStyles();
  const location = useLocation()
  const navigate = useNavigate();
  const movie = location.state;
  const today = new Date();
  let time = format(today,"yyyy-M-d",{
    locale: ja,
  })
  
    const initialValues = {
      title:movie.datas[0].title,
      detail:movie.overview,
      releasedate:movie.datas[0].release_date,
      review:movie.datas[0].vote_average / 2 ,
      cast:movie.credits,
      createdate:time,
      comment:'',
      image:base_url+movie.datas[0].poster_path
    }

    const [moviereg,setMovieReg] = useState(initialValues);
  
    const onValueChange = (e:any) => {
      setMovieReg({...moviereg,[e.target.name]:e.target.value})
    }

    if(Array.isArray(movie.overview)){
      moviereg.detail = '';
    };

    if(Array.isArray(movie.credits)){
      moviereg.cast = '';
    };
    
    const onSubmit = async () => {
      console.log(moviereg);
      await PostNextMovied(moviereg);
      navigate('/nextwatchedlist');
    }
  return(
    <div>
    <h1 style={{textAlign:"center"}}>次観たい映画一覧登録</h1>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
        <TableRow>
            <TableCell className={classes.tableCell1}>
              <Grid container spacing={2}>
                < Grid item xs={6} md={8}>
                  <Card sx={{ width: 250, height:  350}}>
                    <CardMedia component="img" height="100%" image={base_url+movie.datas[0].poster_path} alt="" />
                  </Card>
                </Grid>
              </Grid> 
            </TableCell>
            <TableCell>
             
             <TextField label="タイトル" type="text"
             fullWidth  margin="normal" onChange={(e)=>onValueChange(e)} name="title" defaultValue={movie.datas[0].title} />

             <TextField label="詳細" onChange={(e)=>onValueChange(e)} type="text" name="detail" margin="normal" fullWidth
             multiline rows="6" defaultValue={movie.overview} />
     
             <TextField label="公開日" type="text"
             fullWidth  margin="normal" onChange={(e)=>onValueChange(e)} name="releasedate" defaultValue={movie.datas[0].release_date} />
             
             <div className={classes.field}>
             <span className={classes.fieldlable}>評価</span>
             <div className={classes.reviewIcon}>
             <Stack spacing={1}>
               <Rating name="review" onChange={(e)=>onValueChange(e)} defaultValue={movie.datas[0].vote_average / 2 } precision={0.5} />
             </Stack>
             </div>
             </div>
        
             <TextField label="出演者" type="text"
             fullWidth  margin="normal" onChange={(e)=>onValueChange(e)} name="cast" defaultValue={movie.credits} />
   
             <TextField label="作成日" type="text"
             fullWidth  margin="normal" onChange={(e)=>onValueChange(e)} name="time" defaultValue={time} />
             </TableCell>
          </TableRow>
        <TableRow>
        <h3>コメント</h3>
            <TextField  type="text"
              fullWidth  multiline rows="6" margin="normal" onChange={(e)=>onValueChange(e)} name="comment" />
        </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <div className={classes.buttons}>
    <Button variant="contained" size="small" onClick={() => onSubmit() }>登録する</Button>
    </div>
    </div>
  )
}

export default EditNextMovied;