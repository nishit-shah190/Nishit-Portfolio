import React from 'react';
import useStyles from './styles';
import {Card,Container, CardActionArea,CardActions, CardContent, CardMedia, Button, Grid, Typography} from '@material-ui/core';
import details from './projectDetail.json';
import { Link } from 'react-router-dom';

const Project = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
    <div className={classes.content}>
      <Typography variant="h1" className={classes.h1} gutterbotttom>
          Projects
      </Typography>
      <Grid container spacing={1}>

      {details.map((detail,index) => (
      <Grid item xs={12} sm={6} md={6} lg={6}key={index}>

      <Card className={classes.root} variant="outlined">
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={detail.image}
        title=""
      />
      <CardContent >
        <Typography gutterBottom variant="h4" component="h2" className={classes.cardcontent}>
          {detail.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" className={classes.cardcontent}>
          {detail.description}
        </Typography>
        <div className={classes.techContainer}>
        {detail.techused.map((tech, index) => (
          <Typography key={index} variant="body1" className={classes.techbutton} >
            <span>{tech}</span>
          </Typography>
        ))}
        </div>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.link}>
      <Button component="a" href={detail.githublink} target="_blank" rel = "noopener noreferrer" size="small" color="primary" >
        Github
      </Button>
    </CardActions>
  </Card>
  </Grid>
 ))}
 </Grid>
    </div>
    
</Container>
   
);
  
}

export default Project