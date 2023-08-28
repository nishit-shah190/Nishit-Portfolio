import React from 'react';
import useStyles from './styles'
import SideBar from './components/SideBar/Sidebar';
import { CssBaseline, Divider, Grid, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';

const App = () => {
  const classes = useStyles()
  
  return (
   <div>
    <CssBaseline/> 
    <Router>
      <SideBar/>
      <Switch>
        <Route path="/AboutMe/AboutMe" component={AboutMe}/>
        <Route path="/Resume/resume" component={Resume}/>
        <Route path="/Project/project" component={Project}/>
        <Route path="/Contact/contact" component={Contact}/>
      </Switch>
      </Router>
        <Grid container spacing={1}> 
          <Grid item xs={12}  style={{  background : '#212121' , minHeight: '100vh' }}>
              {/* Main content */}
          </Grid>
          {/* <Grid item xs={12} lg={2}style={{background:'black', minHeight:'100vh'}}> */}
        </Grid> 
       
       {/* </Grid>  */}
   </div>
    
  )
};

export default App