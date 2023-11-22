import React from 'react';
import useStyles from './styles'
import SideBar from './components/SideBar/Sidebar';
import { CssBaseline, Divider, Grid, Typography } from '@material-ui/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';

const App = () => {
  const classes = useStyles()
  
  return (
   <div>
    <Router>
      <Grid container spacing={1} style={{  background : '#151414' , minHeight: '140vh' }}>
        <Grid item lg={2} md={3}>
          <SideBar/>
        </Grid>
        <Grid item lg={10} md={9}>
          <Router>
          <Switch>
          <Route exact path="/" component={AboutMe} />
            <Route  path="/AboutMe" component={AboutMe}/>
            <Route  path="/resume" component={Resume}/>
            <Route  path="/projects" component={Project}/>
            <Route  path="/contact" component={Contact}/>
          </Switch>
          </Router>
        </Grid>
      </Grid>     
      </Router>
  
       
   </div>
    
  )
};

export default App