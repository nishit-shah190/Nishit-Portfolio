import React from 'react'
import { Button,Typography, Container } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import useStyles from './styles'

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/nishit-shah190/Nishit-s-Resume/blob/main/Nishit_Shah_Resume_September.pdf';
    link.target = '_blank';
    link.click();
  }
  const classes = useStyles();
  return (
    <Container maxWidth="md">
    <div className={classes.content}>
      <Typography variant="h1" className={classes.h1} gutterbotttom>
          Resume
      </Typography>
      <Button className={classes.downloadButton} variant="contained" size="large" onClick={downloadResume}>
      <div className={classes.buttonContent}>
        <OpenInNewIcon className={classes.icon} />
          Open Resume
      </div>
    </Button>

    </div>
</Container>
   
  )
}

export default Resume