import React from 'react'
import { Typography, Container, ListItemText, List, ListItem } from '@material-ui/core'
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';

const AboutMe = () => {
  const classes = useStyles();
  return (
    <>
    <Container maxWidth="md">
        <div className={classes.content}>
          <Typography variant="h1" className={classes.h1} gutterbotttom>
              Hey There!
          </Typography>
          <Typography variant="body1" className={classes.body1}>
              <p>First year Computer Science Grad student in University of North Carolina at Charlotte. A passionate Full Stack Developer with a strong industry background. I thrive on turning innovative ideas into practical solutions. My journey in web development has equipped me with the skills to build robust, user-friendly web applications that push boundaries. From front-end design to back-end development, I bring a holistic approach to every project. I'm dedicated to staying up-to-date with the latest technologies, and I'm always excited to take on new challenges.</p>
              <p>In addition to my technical skills, I excel in oral communication and task management, making me a dedicated team player who can effectively collaborate with others.</p>
              <p> Outside of the tech world, I find joy in hiking, swimming, embarking on adventurous road trips, and exploring new places through travel. Got some ideas? Let's plan it together.. </p>
              <p>Courses I had taken in Fall'23</p>
              <List dense>
                <ListItem>
                  <ListItemText >ITCS 6112 Software System Design and Implementation</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>ITCS 6114 Data Structure and Algorithm</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>ITCS 6160 Database System</ListItemText>
                </ListItem>
              </List>
              <p>Courses I have taken in Spring'24</p>
              <List dense>
                <ListItem>
                  <ListItemText>ITCS 5122 Visual Analytics</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>ITCS 6100 Big Data Analytics for Competitive Advantage</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>ITCS 6150 Intelligent Systems</ListItemText>
                </ListItem>
              </List>

          </Typography> 

        </div>
    </Container>
    </>
  )
}

export default AboutMe