import React from 'react';
import {Grid} from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './Main.css'
import { makeStyles } from "@material-ui/core/styles";



function App() {

  return (
  <div>
    <Grid container direction="column">
      <Header />
    </Grid>
    <Main />
    <Footer />
  </div>  

  );
}

export default App;
