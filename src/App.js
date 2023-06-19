import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/Mainpage'
import useStyles from './styles'
import SideBar from './components/SideBar/Sidebar';
import { CssBaseline, Divider, Grid, Typography } from '@material-ui/core';

const App = () => {
  const classes = useStyles()
  
  return (
   <div>
    <CssBaseline/>
      <Grid container spacing={5}>
        <Grid item xs={12} md={2} style={{background:'black'}}>
          <SideBar/>
        </Grid>
        <Grid item xs={12} md={10} style={{background:'blue'}}>
          <Typography>How are you?</Typography>
        </Grid>
      </Grid>
   </div>
    
  )
};

export default App