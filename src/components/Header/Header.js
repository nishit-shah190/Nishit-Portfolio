import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'

const Header = () => {  
  const classes = useStyles()

  return (
   <div className={classes.body}>
    <AppBar position='static' className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.typography}>
          About Me
        </Typography>
        <Typography variant= 'h5' className={classes.typography}>
          Projects
        </Typography>
        
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header